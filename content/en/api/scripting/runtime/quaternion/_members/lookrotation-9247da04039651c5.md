---
uid: api.9247da04039651c502cafb1eac5f8bfb2fddf4722ef379d29299c75a70410028
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Quaternion.LookRotation(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3)"
source: xml
reviewed: 5a09dbbc75889d6e2060fd648b32285a8787baa2d1c158fe0c8245fcb34ce75d
title: "LookRotation"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Creates a rotation quaternion that looks in `forward` direction with the given `up`.

**Parameter `forward`:** The forward consumed by look rotation; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `up`:** The up consumed by look rotation; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated quaternion that represents the completed operation.
