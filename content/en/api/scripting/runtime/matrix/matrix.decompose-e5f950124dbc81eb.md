---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e5f950124dbc81eb37d1fb0b626358606bc7d4ac06ccedeec57413525e89d42f
symbol: scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Matrix.Decompose(InnoEngine.Mathematics.Matrix,InnoEngine.Mathematics.Vector3@,InnoEngine.Mathematics.Quaternion@,InnoEngine.Mathematics.Vector3@)
title: Matrix.Decompose
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: editor-script
sourceFingerprint: 76b1a68b1424081719a9c91954643bfc73ed715f3ff7275ff7ffdba7ff466e21
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `m`:** The transformation matrix applied to the supplied value.

**Parameter `scale`:** Receives basis-column lengths, with the X sign negated for a negative determinant.

**Parameter `rotation`:** Receives the rotation derived from normalized basis columns, or identity when a scale is too small.

**Parameter `translation`:** Receives the last-column XYZ translation.

## Returns

False when a basis-column length is at most the default tolerance; otherwise true. Success does not certify that a matrix with shear or perspective is a pure TRS transform.
