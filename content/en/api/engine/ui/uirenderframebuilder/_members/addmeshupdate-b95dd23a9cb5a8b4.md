---
uid: api.b95dd23a9cb5a8b4186dbce99a8be6ee25c7bc592345c42c2c5112eac8d749c3
symbol: "engine:Inno.UI:M:Inno.UI.UiRenderFrameBuilder.AddMeshUpdate(Inno.UI.UiMeshHandle,System.UInt64,Inno.UI.UiVertex[],System.UInt32[])"
source: xml
reviewed: e0bb3d56ed87a19eea38fbe6ceb0c289dd9461f7f408b0e9698e36e6bd436bc6
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
