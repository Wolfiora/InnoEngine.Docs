---
uid: api.fcda3db1efc7d31b1ea274b52a125d91b63d328e655ad554064170d3dcead309
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModalAttribute.#ctor(System.String,System.String,System.Int32)"
source: xml
reviewed: 2e5c1cda0deeed70058ca4b1d8b7033b748fe7819dd9586670d5841c33b4d31c
title: "Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Creates a centered modal registration with a stable identity and draw order.

**Parameter `id`:** The stable identity used to retain modal transition state across refreshes.

**Parameter `title`:** The visible title rendered by the modal host.

**Parameter `order`:** The stable ordering value when multiple modals are visible.

**Exception `T:System.ArgumentException`:** Thrown when `id` or `title` is empty.
