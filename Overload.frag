#donotrun
/*
Overload builtins.  See `Builtin.frag` for details.
*/

#include "OverloadInt.frag"
#include "OverloadFloat.frag"
#ifdef USE_DOUBLE
#include "OverloadDouble.frag"
#endif
