---
uid: api.115b1e9e83066a1c982f6bb1b40ed05d0e472d51ee2a7ddc8727c8ed5e21d404
symbol: "engine:Inno.Build:M:Inno.Build.BuildTargetId.#ctor(System.String)"
source: xml
reviewed: 50eb54f37936533b7c66e66c97164d22a6563bbbbad4a665ac0a9a8eb2c7a638
title: "Constructor"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
---

Creates a stable target identity.

**Parameter `value`:** A lowercase portable identifier composed of letters, numbers, and hyphens.

**Exception `T:System.ArgumentException`:** Thrown when `value` is not a portable target identity.
