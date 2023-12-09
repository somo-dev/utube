import React from 'react'
import { useSearchParams } from 'react-router-dom'

const WatchVideo = () => {
  const [params] = useSearchParams();
  const vidId = params.get("vidId");
  return (
    <div>WatchVideo</div>
  );
};

export default WatchVideo