const formatTime = secs => {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor(secs / 60) % 60;
  const seconds = secs % 60;
  return [hours, minutes, seconds]
    .map(v => `${v}`.padStart(2, '0'))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':');
};

export { formatTime };
