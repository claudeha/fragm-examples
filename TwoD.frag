#donotrun
// (c) 2020 Claude Heiland-Allen
// SPDX-License-Identifier: GPL-3.0-or-later

#include "Common.frag"
#include "sRGB.frag"
#include "Camera2D.frag"

uint hash(uint a)
{
  return hash_burtle_9(a);
}
