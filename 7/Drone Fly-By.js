function flyBy(lamps, drone){
  let onLamps = lamps.substring(0, drone.length).replace(/x/g, 'o');
  return onLamps + lamps.substring(onLamps.length);
}
