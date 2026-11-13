---
uid: api.4f08a413b67016a9fc4e8234a0513a08496a9d0aff5afbb40c7938faefea0d94
symbol: "engine:Inno.Content:M:Inno.Content.ContentPackDescriptor.#ctor(System.String,System.String)"
source: xml
reviewed: 6b15c06b00a6bcbe21f79fc60f0252806fcc68798f756ef6072a80e797015f02
title: "Constructor"
kind: api
owners: [Inno.Content]
apiSurface: source-clr
---

Validates the complete pack identity and its single portable file name.

**Parameter `contentHash`:** The SHA-256 of the complete pack bytes.

**Parameter `fileName`:** The name `content-{uppercase SHA-256}.pack` relative to the source.

**Exception `T:System.ArgumentException`:** The hash or file name does not identify one current-format pack.
