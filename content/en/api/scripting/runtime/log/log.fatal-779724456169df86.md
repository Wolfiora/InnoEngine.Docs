---
uid: api.779724456169df86e18fec9afeea7ee6b7a4ef42a21d35fb5fd55caf52d7ed8d
symbol: "scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Fatal(System.Type,System.Object,System.String,System.Int32)"
source: xml
reviewed: 207709f5adb73e0847baa5116d66981ea94eb009274bea5a4f0318c5b6a82dfa
title: "Log.Fatal"
kind: api
owners: [Inno.Core.Logging]
apiSurface: editor-script
apiScope: Runtime
---

Writes a fatal-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
