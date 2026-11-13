---
uid: api.115b1e9e83066a1c982f6bb1b40ed05d0e472d51ee2a7ddc8727c8ed5e21d404
symbol: "engine:Inno.Build:M:Inno.Build.BuildTargetId.#ctor(System.String)"
source: xml
reviewed: 47e4d677b8a0cdecc15a3fff387c76bb330835430c90f9a28ed2a1e24971b0b4
title: "Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates a stable target identity.

**Parameter `value`:** A lowercase portable identifier composed of letters, numbers, and hyphens.

**Exception `T:System.ArgumentException`:** Thrown when `value` is not a portable target identity.
