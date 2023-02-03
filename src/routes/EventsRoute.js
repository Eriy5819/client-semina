import { Route, Routes } from 'react-router-dom';

import Event from '../pages/events';

export function EventsRoute() {
  return (
    <Routes>
      <Route path='/' element={<Event />} />
    </Routes>
  );
}
