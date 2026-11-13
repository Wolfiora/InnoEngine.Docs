---
uid: api.b95dd23a9cb5a8b4186dbce99a8be6ee25c7bc592345c42c2c5112eac8d749c3
symbol: "engine:Inno.UI:M:Inno.UI.UiRenderFrameBuilder.AddMeshUpdate(Inno.UI.UiMeshHandle,System.UInt64,Inno.UI.UiVertex[],System.UInt32[])"
source: xml
reviewed: 75062751cfe83241e7fdb90abca94276609b2f913a6d9be05f8bb5a074948ec4
title: "AddMeshUpdate"
kind: api
owners: [Inno.UI]
apiSurface: source-clr
---

Adds one mesh update and takes exclusive ownership of both arrays.

**Parameter `mesh`:** Assigned mesh handle.

**Parameter `revision`:** Positive content revision.

**Parameter `vertices`:** Owned vertex array; the caller must not mutate it afterward.

**Parameter `indices`:** Owned index array; the caller must not mutate it afterward.
