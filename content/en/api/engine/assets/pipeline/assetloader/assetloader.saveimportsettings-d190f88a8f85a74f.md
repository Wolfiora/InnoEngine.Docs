---
uid: api.d190f88a8f85a74fdd9e83ef2b70c8b9bde9a675d19eaf96eb2c9932de0a3391
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.SaveImportSettings(Inno.Assets.AssetPath,Inno.Core.Serialization.ISerializable,System.String)"
source: xml
reviewed: b92a7d8bdb211e2c8a7d79f45df6784200bd52c33a81817435f1f19d19c230ca
title: "AssetLoader.SaveImportSettings"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Atomically saves importer settings and reimports the source. Failed imports retain both the saved settings and the previous successful artifact; callers must inspect the returned import status separately from saving.

**Parameter `path`:** The writable isolated source path.

**Parameter `settings`:** A value of the current importer's settings type, or null to reset to defaults.

**Parameter `expectedFingerprint`:** The fingerprint returned when the settings were read.

**Returns:** True when reimport succeeds; false when settings were saved but reimport failed.

**Exception `T:System.IO.IOException`:** The sidecar changed externally or could not be written.

**Exception `T:System.InvalidOperationException`:** The source is read-only or belongs to an isolated candidate.

**Exception `T:System.ArgumentException`:** The settings have a different type from the current importer.
