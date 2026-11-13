---
uid: api.f39cf8e9c97c6ac6efaaf6693da452f082cb7700edc0415a269f1c763804a0c3
symbol: "engine:Inno.Content:M:Inno.Content.ContentReadLimits.#ctor(System.Int64,System.Int64,System.Int64,System.Int32,System.Int32)"
source: xml
reviewed: 9c4e10a7d7aa0a35236d03e2389b419f6ad994534b3dfbee9ec61826a6de50cb
title: "Constructor"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Creates explicit positive budgets for one content preparation operation.

**Parameter `packBytes`:** The maximum encoded pack length.

**Parameter `entryBytes`:** The maximum decoded length of one payload.

**Parameter `totalBytes`:** The maximum sum of all decoded payload lengths.

**Parameter `indexBytes`:** The maximum decoded inventory document length.

**Parameter `entryCount`:** The maximum number of payload entries.
