---
uid: api.737eddfcd5bb02dedfb5b5fa50f8f8b0334d4eef5ce2f39614583359d6ec424b
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModalAttribute.#ctor(System.String,System.String,System.Int32)"
source: xml
reviewed: 590ee148092e1c458b8baabd4fcb757c1fba9c748aa2d58967aca4b97385c6fb
title: "Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Creates a centered modal registration with a stable identity and draw order.

**Parameter `id`:** The stable identity used to retain modal transition state across refreshes.

**Parameter `title`:** The visible title rendered by the modal host.

**Parameter `order`:** The stable ordering value when multiple modals are visible.

**Exception `T:System.ArgumentException`:** Thrown when `id` or `title` is empty.
