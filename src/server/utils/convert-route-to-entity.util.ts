const mapping: Record<string, string> = {
  bookings: 'booking',
  'business-owners': 'business_owner',
  companies: 'company',
  customers: 'customer',
  'parking-spaces': 'parking_space',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
