#donotrun
/*
Capture builtin functions before redefinition.
In GLSL, built in functions cannot be overloaded, only redefined.
The redefinitions *can* be overloaded.
This is needed to define double precision versions of missing functions.
*/

#include "BuiltinInt.frag"
#include "BuiltinFloat.frag"
#ifdef USE_DOUBLE
#include "BuiltinDouble.frag"
#endif
