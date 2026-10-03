import type {Event} from "../event/types";import type {HistoricalPeriod} from "../period/types";
export type TimelineNode={readonly kind:"period";readonly item:HistoricalPeriod}|{readonly kind:"event";readonly item:Event};
