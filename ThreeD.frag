#donotrun

#include "Common.frag"
#include "DistanceEstimate.frag"
#include "MathUtils.frag"
#include "DE-Raytracer.frag" 

uint hash(uint a)
{
  return hash_burtle_9(a);
}
