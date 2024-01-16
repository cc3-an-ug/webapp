import { Loader2 } from 'lucide-react';
import { Suspense } from 'react';

import { Badge } from './ui/badge';

export function YearBadge() {
  return (
    <Suspense fallback={<YearBadgeFallback />}>
      <YearBadgeAsync />
    </Suspense>
  );
}

function YearBadgeFallback() {
  return (
    <Badge variant="outline" className="mt-0.5 h-5 w-14 justify-center">
      <Loader2 className="h-3 w-3 animate-spin" />
    </Badge>
  );
}

async function YearBadgeAsync() {
  let year = new Date().getFullYear().toString();
  try {
    const url = 'https://current-time-api.vercel.app/api/current-years';
    const r = await fetch(url);
    const text = await r.text();
    year = r.status === 200 ? text : year;
  } finally {
    return (
      <Badge variant="outline" className="mt-0.5 h-5 w-14">
        {year}
      </Badge>
    );
  }
}
