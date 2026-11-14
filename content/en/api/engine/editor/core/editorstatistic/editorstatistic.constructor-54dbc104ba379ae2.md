---
uid: api.54dbc104ba379ae243db3eab86e1f0eebc355243d6d59c4cef2cff17402722fa
symbol: "engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorStatistic.#ctor(Inno.Editor.Core.EditorStatisticId,Inno.Editor.Core.EditorStatisticGroupId,System.String,System.String,System.String,System.Int32,System.Int32)"
source: xml
reviewed: cd12f61ac8889df604d281b41bb341ebff5cd9f96db74e5062754b6eec2cf28e
title: "EditorStatistic.Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: source-clr
---

Creates one statistic contribution.

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
