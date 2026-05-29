import { PHONE_HREF } from '@/lib/constants';

export default function EmergencyBar({ message }: { message: string }) {
  return (
    <div className="emergency-bar">
      <span className="pulse" />
      <span>{message}</span>
      <a href={PHONE_HREF}>Call Now — Free</a>
    </div>
  );
}
