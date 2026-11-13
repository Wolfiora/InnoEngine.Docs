---
uid: api.9ec12b89cc881ef93d016139cafb1bff080e87716a30493821ad4dad766daf3c
symbol: "engine:Inno.Core.Logging:M:Inno.Core.Logging.LogRouter.EnterScope"
source: xml
reviewed: 334fee3b345a5ec0e0c40eec7aa6e99b1212b9527e024b18ed8f34a84f6c097b
title: "LogRouter.EnterScope"
kind: api
owners: [Inno.Core.Logging]
apiSurface: source-clr
---

Binds this router to the current asynchronous execution context.

**Returns:** A strict last-in-first-out scope owned by the caller.

**Exception `T:System.ObjectDisposedException`:** Thrown after this router has been disposed.
