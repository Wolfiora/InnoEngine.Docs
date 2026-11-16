---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.54dbc104ba379ae243db3eab86e1f0eebc355243d6d59c4cef2cff17402722fa
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorStatistic.#ctor(Inno.Editor.Core.EditorStatisticId,Inno.Editor.Core.EditorStatisticGroupId,System.String,System.String,System.String,System.Int32,System.Int32)
title: EditorStatistic.Constructor
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 21b9c5f3511cdb9118b18fcc3629edd5fc63901cb7a02e9c0c45ef963b1457c7
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
