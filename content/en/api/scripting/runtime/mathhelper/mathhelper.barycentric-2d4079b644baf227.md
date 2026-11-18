---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2d4079b644baf2273163fc45cd4b75ac83b6d5f1638614461bbce45c4dfdd09e
symbol: scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.MathHelper.Barycentric(System.Single,System.Single,System.Single,System.Single,System.Single)
title: MathHelper.Barycentric
kind: api
owners:
- Inno.Core.Mathematics
apiSurface: editor-script
sourceFingerprint: 84294b4879759f434e6b20b2f38a83c803f75be5a31761e9dbdccc7660c92041
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value1`:** The coordinate on one axis of vertex 1 of the defining triangle.

**Parameter `value2`:** The coordinate on the same axis of vertex 2 of the defining triangle.

**Parameter `value3`:** The coordinate on the same axis of vertex 3 of the defining triangle.

**Parameter `amount1`:** The normalized barycentric (areal) coordinate b2, equal to the weighting factor for vertex 2, the coordinate of which is specified in value2.

**Parameter `amount2`:** The normalized barycentric (areal) coordinate b3, equal to the weighting factor for vertex 3, the coordinate of which is specified in value3.

## Returns

Cartesian coordinate of the specified point with respect to the axis being used.
