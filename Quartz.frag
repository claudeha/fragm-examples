#donotrun
// (c) 2018-2020 Claude Heiland-Allen
// SPDX-License-Identifier: GPL-3.0-or-later

vec2 Quartz_nk(float wavelength) {
  const float quartz_min   = 390;
  const float quartz_step  =   2;
#define quartz_count 221
  const vec2 quartz_nk[quartz_count] = vec2[quartz_count]
    ( vec2(1.490867, 0.000009)
    , vec2(1.490629, 0.000007)
    , vec2(1.490396, 0.000005)
    , vec2(1.490165, 0.000003)
    , vec2(1.489938, 0.000002)
    , vec2(1.489714, 0.000001)
    , vec2(1.489494, 0.000001)
    , vec2(1.489276, 0.000000)
    , vec2(1.489062, 0.000000)
    , vec2(1.488850, 0.000000)
    , vec2(1.488641, 0.000000)
    , vec2(1.488435, 0.000000)
    , vec2(1.488231, 0.000000)
    , vec2(1.488031, 0.000000)
    , vec2(1.487833, 0.000000)
    , vec2(1.487638, 0.000000)
    , vec2(1.487446, 0.000000)
    , vec2(1.487256, 0.000000)
    , vec2(1.487069, 0.000000)
    , vec2(1.486884, 0.000000)
    , vec2(1.486702, 0.000000)
    , vec2(1.486522, 0.000000)
    , vec2(1.486345, 0.000000)
    , vec2(1.486170, 0.000000)
    , vec2(1.485997, 0.000000)
    , vec2(1.485827, 0.000000)
    , vec2(1.485659, 0.000000)
    , vec2(1.485493, 0.000000)
    , vec2(1.485329, 0.000000)
    , vec2(1.485167, 0.000000)
    , vec2(1.485008, 0.000000)
    , vec2(1.484851, 0.000000)
    , vec2(1.484695, 0.000000)
    , vec2(1.484542, 0.000000)
    , vec2(1.484390, 0.000000)
    , vec2(1.484241, 0.000000)
    , vec2(1.484094, 0.000000)
    , vec2(1.483948, 0.000000)
    , vec2(1.483804, 0.000000)
    , vec2(1.483662, 0.000000)
    , vec2(1.483522, 0.000000)
    , vec2(1.483383, 0.000000)
    , vec2(1.483247, 0.000000)
    , vec2(1.483111, 0.000000)
    , vec2(1.482978, 0.000000)
    , vec2(1.482846, 0.000000)
    , vec2(1.482716, 0.000000)
    , vec2(1.482588, 0.000000)
    , vec2(1.482461, 0.000000)
    , vec2(1.482335, 0.000000)
    , vec2(1.482211, 0.000000)
    , vec2(1.482089, 0.000000)
    , vec2(1.481968, 0.000000)
    , vec2(1.481848, 0.000000)
    , vec2(1.481730, 0.000000)
    , vec2(1.481613, 0.000000)
    , vec2(1.481498, 0.000000)
    , vec2(1.481384, 0.000000)
    , vec2(1.481271, 0.000000)
    , vec2(1.481160, 0.000000)
    , vec2(1.481050, 0.000000)
    , vec2(1.480941, 0.000000)
    , vec2(1.480834, 0.000000)
    , vec2(1.480727, 0.000000)
    , vec2(1.480622, 0.000000)
    , vec2(1.480518, 0.000000)
    , vec2(1.480416, 0.000000)
    , vec2(1.480314, 0.000000)
    , vec2(1.480214, 0.000000)
    , vec2(1.480115, 0.000000)
    , vec2(1.480016, 0.000000)
    , vec2(1.479919, 0.000000)
    , vec2(1.479823, 0.000000)
    , vec2(1.479729, 0.000000)
    , vec2(1.479635, 0.000000)
    , vec2(1.479542, 0.000000)
    , vec2(1.479450, 0.000000)
    , vec2(1.479359, 0.000000)
    , vec2(1.479269, 0.000000)
    , vec2(1.479181, 0.000000)
    , vec2(1.479093, 0.000000)
    , vec2(1.479006, 0.000000)
    , vec2(1.478920, 0.000000)
    , vec2(1.478835, 0.000000)
    , vec2(1.478751, 0.000000)
    , vec2(1.478667, 0.000000)
    , vec2(1.478585, 0.000000)
    , vec2(1.478503, 0.000000)
    , vec2(1.478423, 0.000000)
    , vec2(1.478343, 0.000000)
    , vec2(1.478264, 0.000000)
    , vec2(1.478186, 0.000000)
    , vec2(1.478108, 0.000000)
    , vec2(1.478032, 0.000000)
    , vec2(1.477956, 0.000000)
    , vec2(1.477881, 0.000000)
    , vec2(1.477807, 0.000000)
    , vec2(1.477733, 0.000000)
    , vec2(1.477660, 0.000000)
    , vec2(1.477588, 0.000000)
    , vec2(1.477517, 0.000000)
    , vec2(1.477447, 0.000000)
    , vec2(1.477377, 0.000000)
    , vec2(1.477308, 0.000000)
    , vec2(1.477239, 0.000000)
    , vec2(1.477171, 0.000000)
    , vec2(1.477104, 0.000000)
    , vec2(1.477038, 0.000000)
    , vec2(1.476972, 0.000000)
    , vec2(1.476907, 0.000000)
    , vec2(1.476842, 0.000000)
    , vec2(1.476778, 0.000000)
    , vec2(1.476715, 0.000000)
    , vec2(1.476652, 0.000000)
    , vec2(1.476590, 0.000000)
    , vec2(1.476529, 0.000000)
    , vec2(1.476468, 0.000000)
    , vec2(1.476408, 0.000000)
    , vec2(1.476348, 0.000000)
    , vec2(1.476289, 0.000000)
    , vec2(1.476230, 0.000000)
    , vec2(1.476172, 0.000000)
    , vec2(1.476115, 0.000000)
    , vec2(1.476058, 0.000000)
    , vec2(1.476001, 0.000000)
    , vec2(1.475946, 0.000000)
    , vec2(1.475890, 0.000000)
    , vec2(1.475835, 0.000000)
    , vec2(1.475781, 0.000000)
    , vec2(1.475727, 0.000000)
    , vec2(1.475674, 0.000000)
    , vec2(1.475621, 0.000000)
    , vec2(1.475568, 0.000000)
    , vec2(1.475517, 0.000000)
    , vec2(1.475465, 0.000000)
    , vec2(1.475414, 0.000000)
    , vec2(1.475364, 0.000000)
    , vec2(1.475314, 0.000000)
    , vec2(1.475264, 0.000000)
    , vec2(1.475215, 0.000000)
    , vec2(1.475166, 0.000000)
    , vec2(1.475118, 0.000000)
    , vec2(1.475070, 0.000000)
    , vec2(1.475022, 0.000000)
    , vec2(1.474975, 0.000000)
    , vec2(1.474929, 0.000000)
    , vec2(1.474883, 0.000000)
    , vec2(1.474837, 0.000000)
    , vec2(1.474791, 0.000000)
    , vec2(1.474746, 0.000000)
    , vec2(1.474702, 0.000000)
    , vec2(1.474657, 0.000000)
    , vec2(1.474614, 0.000000)
    , vec2(1.474570, 0.000000)
    , vec2(1.474527, 0.000000)
    , vec2(1.474484, 0.000000)
    , vec2(1.474442, 0.000000)
    , vec2(1.474400, 0.000000)
    , vec2(1.474358, 0.000000)
    , vec2(1.474317, 0.000000)
    , vec2(1.474276, 0.000000)
    , vec2(1.474235, 0.000000)
    , vec2(1.474195, 0.000000)
    , vec2(1.474155, 0.000000)
    , vec2(1.474115, 0.000000)
    , vec2(1.474076, 0.000000)
    , vec2(1.474037, 0.000000)
    , vec2(1.473998, 0.000000)
    , vec2(1.473960, 0.000000)
    , vec2(1.473922, 0.000000)
    , vec2(1.473884, 0.000000)
    , vec2(1.473847, 0.000000)
    , vec2(1.473810, 0.000000)
    , vec2(1.473773, 0.000000)
    , vec2(1.473737, 0.000000)
    , vec2(1.473700, 0.000000)
    , vec2(1.473665, 0.000000)
    , vec2(1.473629, 0.000000)
    , vec2(1.473594, 0.000000)
    , vec2(1.473559, 0.000000)
    , vec2(1.473524, 0.000000)
    , vec2(1.473489, 0.000000)
    , vec2(1.473455, 0.000000)
    , vec2(1.473421, 0.000000)
    , vec2(1.473387, 0.000000)
    , vec2(1.473354, 0.000000)
    , vec2(1.473321, 0.000000)
    , vec2(1.473288, 0.000000)
    , vec2(1.473255, 0.000000)
    , vec2(1.473223, 0.000000)
    , vec2(1.473191, 0.000000)
    , vec2(1.473159, 0.000000)
    , vec2(1.473127, 0.000000)
    , vec2(1.473096, 0.000000)
    , vec2(1.473065, 0.000000)
    , vec2(1.473034, 0.000000)
    , vec2(1.473003, 0.000000)
    , vec2(1.472973, 0.000000)
    , vec2(1.472942, 0.000000)
    , vec2(1.472912, 0.000000)
    , vec2(1.472883, 0.000000)
    , vec2(1.472853, 0.000000)
    , vec2(1.472824, 0.000000)
    , vec2(1.472795, 0.000000)
    , vec2(1.472766, 0.000000)
    , vec2(1.472737, 0.000000)
    , vec2(1.472709, 0.000000)
    , vec2(1.472680, 0.000000)
    , vec2(1.472652, 0.000000)
    , vec2(1.472625, 0.000000)
    , vec2(1.472597, 0.000000)
    , vec2(1.472570, 0.000000)
    , vec2(1.472542, 0.000000)
    , vec2(1.472515, 0.000000)
    , vec2(1.472489, 0.000000)
    , vec2(1.472462, 0.000000)
    , vec2(1.472436, 0.000000)
    , vec2(1.472409, 0.000000)
    , vec2(1.472383, 0.000000)
    , vec2(1.472357, 0.000000)
    , vec2(1.472332, 0.000000)
    );
  float x  = (wavelength - quartz_min) / quartz_step;
  int   i0 = int(floor(x));
  int   i1 = i0 + 1;
  float f1 = x - float(i0);
  if (i0 < 0) return quartz_nk[0];
  if (i1 > quartz_count - 1) return quartz_nk[quartz_count - 1];
  vec2 y0 = quartz_nk[i0];
  vec2 y1 = quartz_nk[i1];
  return mix(y0, y1, f1);
#undef quartz_count
}
