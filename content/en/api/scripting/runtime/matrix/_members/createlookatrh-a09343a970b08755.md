---
uid: api.a09343a970b08755974315f02bf203273f17b85df3ecdb90ab05ed6d01973fb2
symbol: "scripting:Inno.Core.Mathematics:M:InnoEngine.Mathematics.Matrix.CreateLookAtRH(InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3,InnoEngine.Mathematics.Vector3)"
source: xml
reviewed: 2eb868696439aea8c4fa8d297ae20b56c1e3620cf12277b85bc74cb3ead6cda4
title: "CreateLookAtRH"
kind: api
owners: [Inno.Core.Mathematics]
apiSurface: editor-script
apiScope: Runtime
---

Creates a right-handed view matrix that looks from `eye` to `target`.

**Parameter `eye`:** The eye consumed by create look at rh; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `target`:** The existing target that receives the validated result.

**Parameter `up`:** The up consumed by create look at rh; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated matrix that represents the completed operation.
