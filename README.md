# fragm-examples

Claude's Examples for Fragmentarium
(FragM fork, <https://github.com/3Dickulus/FragM>)

(c) 2020 Claude Heiland-Allen <https://mathr.co.uk>

SPDX-License-Identifier: GPL-3.0-or-later

See `COPYING.md` for terms.


## Examples

  - `00-Mandelbulb-vs-Menger.frag`

    3D hybrid distance estimated fractals.

  - `00-mET.frag`, `00-MuET.frag`

    2D hybrid escape time fractals.

  - `00-Inflection-1.frag` `00-Inflection-2.frag`

    Mandelbrot inflections.

  - `00-Ultimate-AntiBuddhagram.frag`

    4D ultimate anti-Buddhagram surface.

  - `00-Triskelion.frag`

    Failed attempt at Triskelion dial-a-Julia.

  - `00-Variations-1.frag`

    A rational function coloured with atom domains.

  - `00-Mandelbrot-MultiWave.frag`

    Simple 2D escape time with multiwave palette.

  - `00-Rainbow-Slopes.frag`
  
    Burning Ship with slope angle hue colouring.

  - `00-Apollonian.frag`

    Attempt at Apollonian gasket.
  
  - `00-Cross-Trap.frag`
  
    Mandelbrot with cross-shaped orbit trap.
    
  - `00-Cubic.frag`
  
    Cubic rational with several Mandelbrot planes and Julia.

  - `00-Quadratic-Mating.frag`
  
    Mating of quadratic Julia sets.

  - `00-JuliaSqrSinhZ2PlusC.frag`

    Reconstruction/reverse engineering of an image from the forums.

  - `00-Mandelbrot-Numerics.frag`
  
    Using mandelbrot-numerics code for various renderings.  Has some
    undocumented features that can be enabled by editing code.

  - `00-Mengerbrot.frag`
  
    Hybrid of Sierpinski carpet and Mandelbrot set, using (incorrectly)
    Lambert W function.
  
  - `00-MandelbarDE.frag`

    (Doesn't work, missing support frags.)


## Library

  - `ThreeD.frag`

    Main include file for 3D frags.

  - `TwoD.frag`

    Main include file for 2D frags.

  - `Common.frag`

    Library include file.

  - `sRGB.frag`

    Helper for setting up buffer shader for sRGB.

  - `Buffer-sRGB.frag`

    Buffer shader storing linear values, converting to sRGB on display.
    Exposure control and debug setting to highlight out of gamut pixels.

  - `Builtin.frag`
    `BuiltinInt.frag` `BuiltinFloat.frag` `BuiltinDouble.frag`

    Capture of built-in GLSL functions for later overloading.

  - `Overload.frag`
    `OverloadInt.frag` `OverloadFloat.frag` `OverloadDouble.frag`

    Overloading of built-in GLSL functions.

  - `Int.frag` `Real.frag` `RealBase.frag`

    Overloading for basic operators.

  - `Const.frag`

    Mathematical constants.

  - `Double.frag`

    Double-precision special functions.  From FragM upstream, with mods.

  - `FloatX.frag` `FloatXBase.frag`

    Floating point with extended exponent range.

  - `Compensated.frag`

    Compensated double-double arithmetic for higher precision.

  - `Complex.frag` `ComplexBase.frag`

    Complex numbers.

  - `Dual.frag` `DualBase.frag`

    Dual numbers for automatic differentiation.

  - `Vec.frag` `VecBase.frag`

    Generalized vectors.

  - `Triplex.frag`, `TriplexBase.frag`

    Triplex algebra (as used in Mandelbulb fractal).

  - `DistanceEstimate.frag`

    Distance estimator for 3D fractal formulas.

  - `MengerSponge.frag`, `Mandelbulb.frag`, `Magnetbulb.frag`

    Example 3D fractal formulas.

  - `Hash.frag`

    A selection of integer hash functions (from BurtleBurtle).

  - `LambertW.frag`, `LambertWBase.frag`

    Lambert W function (Product-Log).  From GNU Scientific Library.

  - `Camera2D.frag`

    Enhanced 2D camera frag with many features.

  - `MandelbrotNumerics.frag`
  
    Library include file for Mandelbrot and related functions.

  - `m_attractor.frag` `m_interior_de.frag` `m_misiurewicz.frag`
    `m_newton.frag` `m_nucleus.frag` `m_render.frag`

    Mandelbrot and related functions.
