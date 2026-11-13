---
uid: api.625f4eaceb00b056c7ae3c682459233c9be2964407afd7f4f8b0598f6390fe20
symbol: "engine:Inno.Assets:M:Inno.Assets.ArtifactLease.ReadAllBytes"
source: xml
reviewed: 7687bf49af19afabf14058a402d3146a67e46411827eb9abc764b322cbc9c2b5
title: "ReadAllBytes"
kind: api
owners: [Inno.Assets]
apiSurface: source-clr
---

Reads one indexed payload through this lease's independently pinned stream.

**Returns:** Newly owned bytes with the exact indexed length; oversized or truncated payloads fail explicitly.

**Exception `T:System.IO.InvalidDataException`:** The payload exceeds the supported array size or does not have its indexed length.
