---
uid: api.542856d487e9fa8e6ff47a8a89c293c712754d79b58c6c7d939ea49f6379c75f
symbol: "scripting:Inno.UI:M:InnoEngine.UI.IUiService.DrainEvents(InnoEngine.UI.UiContextHandle)"
source: xml
reviewed: 006216d5b886dad9f73165a49ca90c4179e434faa801064c9347b4c99b7c36cb
title: "IUiService.DrainEvents"
kind: api
owners: [Inno.UI]
apiSurface: editor-script
apiScope: Runtime
---

Drains document events queued by preceding updates.

**Parameter `context`:** The context that owns the requested document or state.

**Returns:** Events emitted since the preceding drain, in dispatch order.
