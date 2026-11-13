---
uid: api.651703b0605fa17c756b1f8cf7f88ab48e57777d3d01787721479d8b58966e2b
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteraction.Enqueue(System.String,System.Object)"
source: xml
reviewed: bc35c396444a47b89336a46a7a6554d8c5709c560e5e31943af52c87099d7f5e
title: "EditorInteraction.Enqueue"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Queues an action until the current UI traversal completes.

**Parameter `action`:** The stable action name.

**Parameter `argument`:** An optional action argument.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
