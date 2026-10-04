import{test,expect}from"@playwright/test";

test.describe("performance baseline",()=>{
  for(const route of ["/?lang=en","/calendar?lang=en&year=2465&month=5","/search?lang=en&q=Re%C5%BE%C4%81%20Shah%20Pahlavi"]){
    test("desktop navigation budget: "+route,async({page},testInfo)=>{
      test.skip(testInfo.project.name!=="chromium-desktop");
      const response=await page.goto(route,{waitUntil:"domcontentloaded"});
      expect(response?.ok()).toBe(true);
      const metrics=await page.evaluate(()=>{const n=performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;return{
        ttfb:n.responseStart-n.requestStart,
        domContentLoaded:n.domContentLoadedEventEnd-n.startTime,
        load:n.loadEventEnd?n.loadEventEnd-n.startTime:null
      }});
      console.log("PERF route="+route+" ttfb_ms="+metrics.ttfb.toFixed(1)+" domcontentloaded_ms="+metrics.domContentLoaded.toFixed(1)+" load_ms="+(metrics.load===null?"pending":metrics.load.toFixed(1)));
      expect(metrics.ttfb).toBeLessThan(2000);
      expect(metrics.domContentLoaded).toBeLessThan(5000);
    });
  }
});
