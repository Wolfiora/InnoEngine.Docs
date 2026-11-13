---
uid: api.3612688301e1cbd1dce06dac255d25fe3b7647a0c3f7f5797a378c3226563063
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.OnActivating(\u00600,\u00600)"
source: xml
reviewed: 1351c11f23248298624b2632797ecee0c49c46127d2e008da7ee18a9d6207354
title: "OnActivating"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Reversibly activates a complete candidate while the previous snapshot remains available.

**Parameter `previous`:** The previous active snapshot, or `null` during initial activation.

**Parameter `candidate`:** The candidate exposed through ``P:Inno.Extensibility.Types.TypeRegistry`1.current`` during this callback.

## Remarks

Implementations may perform fallible lifecycle work here. They must keep enough local state for ``M:Inno.Extensibility.Types.TypeRegistry`1.OnActivationRolledBack(`0,`0)`` to reverse every completed step.
