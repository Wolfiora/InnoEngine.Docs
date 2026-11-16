---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cca68d14ed868e394a00569d30ba666b2129f95274a9d64205f653c5fef56f4d
symbol: engine:Inno.Core.Mathematics:M:Inno.Core.Mathematics.Matrix.Decompose(Inno.Core.Mathematics.Matrix,Inno.Core.Mathematics.Vector3@,Inno.Core.Mathematics.Quaternion@,Inno.Core.Mathematics.Vector3@)
title: Matrix.Decompose
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: source-clr
reviewed: d59785c5dce1aa36be723e2873955c10d2e402c2cc67f1fea7a1789a43bc03cc
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
