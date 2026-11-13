---
uid: api.d76ea218c1a3953be15213597e651cda9dbe625e8233447bb4e48d5e1dd3c966
symbol: "scripting:Inno.Core.Logging:M:InnoEngine.Logging.Log.Error(System.Type,System.Object,System.String,System.Int32)"
source: xml
reviewed: c2a789f8c0a360635929cfa5e6a4a6700c71669ad7c1dcaca29965e974330aca
title: "Error"
kind: api
owners: [Inno.Core.Logging]
apiSurface: editor-script
apiScope: Runtime
---

Writes a error-level message using the object's string representation.

**Parameter `sourceType`:** The declaring type whose assembly supplies domain and scope metadata; it is borrowed only for this call.

**Parameter `obj`:** The object to log; null produces an empty message.

**Parameter `filePath`:** The source file supplied by the compiler; its file name is the category.

**Parameter `lineNumber`:** The source line supplied by the compiler.

**Exception `T:System.ArgumentNullException`:** The source type is null.

**Exception `T:System.InvalidOperationException`:** The source assembly lacks valid domain or scope metadata.
