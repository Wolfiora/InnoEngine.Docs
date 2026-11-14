---
uid: api.c61971238aa644b31a7be4c8bd846e9f9deae1604d0450b37c351a625eaebd65
symbol: "engine:Inno.Content:M:Inno.Content.ContentEntry.#ctor(Inno.Content.ContentKey,System.Int64,System.String)"
source: xml
reviewed: 720c9a8c3a35a12abf931b46479e63f52eb06ebba9428519665239e840d5ecac
title: "ContentEntry.Constructor"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Freezes a portable key, byte length, and SHA-256 identity.

## Parameters

**Parameter `key`:** The assigned logical content key.

**Parameter `length`:** The exact nonnegative decoded byte count.

**Parameter `contentHash`:** The hexadecimal SHA-256 of decoded bytes, normalized to uppercase.

## Exceptions

**Exception `T:System.ArgumentException`:** The key is unassigned or the hash is malformed.
