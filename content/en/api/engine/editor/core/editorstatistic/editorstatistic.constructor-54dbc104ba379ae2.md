---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.54dbc104ba379ae243db3eab86e1f0eebc355243d6d59c4cef2cff17402722fa
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorStatistic.#ctor(Inno.Editor.Core.EditorStatisticId,Inno.Editor.Core.EditorStatisticGroupId,System.String,System.String,System.String,System.Int32,System.Int32)
title: EditorStatistic.Constructor
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 7c8d057321437eb35f162fca722da7c128eb9708f924610b9cf36b50a4b051b1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Globally stable statistic identity used for replacement within a frame.

**Parameter `groupId`:** Stable visual group identity.

**Parameter `groupName`:** User-facing group heading.

**Parameter `label`:** User-facing metric label.

**Parameter `value`:** Already formatted user-facing value.

**Parameter `groupOrder`:** Ascending group presentation order.

**Parameter `order`:** Ascending metric order within the group.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when an identifier, group name, label, or value is empty.
