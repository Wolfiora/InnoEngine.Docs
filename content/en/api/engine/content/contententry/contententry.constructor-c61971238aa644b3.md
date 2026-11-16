---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c61971238aa644b31a7be4c8bd846e9f9deae1604d0450b37c351a625eaebd65
symbol: engine:Inno.Content:M:Inno.Content.ContentEntry.#ctor(Inno.Content.ContentKey,System.Int64,System.String)
title: ContentEntry.Constructor
kind: api
owners:
- Inno.Content
apiSurface: source-clr
reviewed: 30bd34fe2f70d3a2ffaa5578f19cb354411f777d7730669bea907a53b514c0ec
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `key`:** The assigned logical content key.

**Parameter `length`:** The exact nonnegative decoded byte count.

**Parameter `contentHash`:** The hexadecimal SHA-256 of decoded bytes, normalized to uppercase.

## Exceptions

**Exception `T:System.ArgumentException`:** The key is unassigned or the hash is malformed.
