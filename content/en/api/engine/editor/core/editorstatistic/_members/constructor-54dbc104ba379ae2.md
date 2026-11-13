---
uid: api.54dbc104ba379ae243db3eab86e1f0eebc355243d6d59c4cef2cff17402722fa
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorStatistic.#ctor(Inno.Editor.Core.EditorStatisticId,Inno.Editor.Core.EditorStatisticGroupId,System.String,System.String,System.String,System.Int32,System.Int32)"
source: xml
reviewed: a77ff34af7de6c5744a2cc1e6f881401227312774a4559e7cd722288df04c2c6
title: "Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Creates one statistic contribution.

**Parameter `id`:** Globally stable statistic identity used for replacement within a frame.

**Parameter `groupId`:** Stable visual group identity.

**Parameter `groupName`:** User-facing group heading.

**Parameter `label`:** User-facing metric label.

**Parameter `value`:** Already formatted user-facing value.

**Parameter `groupOrder`:** Ascending group presentation order.

**Parameter `order`:** Ascending metric order within the group.

**Exception `T:System.ArgumentException`:** Thrown when an identifier, group name, label, or value is empty.
