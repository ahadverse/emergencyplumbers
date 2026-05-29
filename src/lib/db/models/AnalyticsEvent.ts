import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAnalyticsEvent extends Document {
  type: 'blog_view' | 'call_click';
  blogSlug?: string;
  page: string;
  timestamp: Date;
}

const AnalyticsEventSchema = new Schema<IAnalyticsEvent>({
  type: { type: String, enum: ['blog_view', 'call_click'], required: true },
  blogSlug: { type: String },
  page: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

AnalyticsEventSchema.index({ type: 1, timestamp: -1 });

const AnalyticsEvent: Model<IAnalyticsEvent> =
  mongoose.models.AnalyticsEvent ??
  mongoose.model<IAnalyticsEvent>('AnalyticsEvent', AnalyticsEventSchema);

export default AnalyticsEvent;
