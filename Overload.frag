#donotrun
/*
Overload builtins.  See `Builtin.frag` for details.
*/

#include "OverloadInt.frag"
#include "OverloadFloat.frag"
#if __VERSION__ >= 400
#include "OverloadDouble.frag"
#endif
