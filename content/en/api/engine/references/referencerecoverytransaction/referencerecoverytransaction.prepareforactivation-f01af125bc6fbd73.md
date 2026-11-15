---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f01af125bc6fbd7391919b4a313a047f5f9b8092c05c54a3f5488cf79c160c7e
symbol: engine:Inno.References:M:Inno.References.ReferenceRecoveryTransaction.PrepareForActivation
title: ReferenceRecoveryTransaction.PrepareForActivation
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: 31e75d178314c81adeb08550c3d6fefa0aedf38b48bb8ad1d2f754d662e5e86b

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Quiesces domain owners while the previous type and serialization publication is still active.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The phase is out of order or the caller is not the owner thread.
