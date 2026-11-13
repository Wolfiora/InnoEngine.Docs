---
uid: api.3bcbfd40c13f9fd0cc1364da0f419edf72fbb7235953afce3bf6565c4445ac66
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.CreateLogger\u0060\u00601"
source: xml
reviewed: 1067f6f8718edd229736e484ddf4db079b5cb2a30197adfbc3b6adea915a662f
title: "CreateLogger"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Creates a category-bound logger for one engine service or extension type.

**Type parameter `TOwner`:** The type whose assembly ownership and category identify emitted entries.

**Returns:** A stateless logger bound to this router and the supplied owner type.

**Exception `T:System.ObjectDisposedException`:** Thrown after this router has been disposed.
