---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fcda3db1efc7d31b1ea274b52a125d91b63d328e655ad554064170d3dcead309
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorModalAttribute.#ctor(System.String,System.String,System.Int32)
title: EditorModalAttribute.Constructor
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: fb92f5afc414ebcbc31219b1ca1996cf55e6369ac5f86096745e4d4c690ebce0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** The stable identity used to retain modal transition state across refreshes.

**Parameter `title`:** The visible title rendered by the modal host.

**Parameter `order`:** The stable ordering value when multiple modals are visible.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` or `title` is empty.
