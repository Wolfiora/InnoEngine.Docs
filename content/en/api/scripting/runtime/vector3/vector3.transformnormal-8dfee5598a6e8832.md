---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8dfee5598a6e8832841877d907c940c804cf4c9b7347af10dde591d868c54b3e
symbol: scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Vector3.TransformNormal(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Matrix)
title: Vector3.TransformNormal
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: editor-script
reviewed: 7fe42bfe0527aed360b0021a523e6be544692b830d0775241f51ff7fc819ea37
apiScope: Runtime

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Applies the matrix's upper-left 3-by-3 linear transform without translation.

## Parameters

**Parameter `normal`:** The surface normal used by the operation.

**Parameter `matrix`:** The transformation matrix applied to the supplied value.

## Returns

The transformed components without normalization or an automatically computed inverse transpose.
