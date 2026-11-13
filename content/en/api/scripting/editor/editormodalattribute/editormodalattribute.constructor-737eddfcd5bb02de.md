---
uid: api.737eddfcd5bb02dedfb5b5fa50f8f8b0334d4eef5ce2f39614583359d6ec424b
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModalAttribute.#ctor(System.String,System.String,System.Int32)"
source: xml
reviewed: d8e5d3d59ee51ee91b000b04e9dfe213075da88e3ac412b4ed51ec163a7bc6d6
title: "EditorModalAttribute.Constructor"
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
