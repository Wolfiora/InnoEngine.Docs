---
uid: api.da1d973c9a08d048316264ebcb98144302af29cd7be7da4f60fe3c6874c4f1fa
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.AtomicFile.Install(System.String,System.String,System.Boolean)"
source: xml
reviewed: 22795254272974970d020ffd4d470c24e4ad49db2b25671bf7ecdf6c5b9951e4
title: "Install"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Atomically installs an existing same-directory candidate file.

**Parameter `source`:** The complete candidate file beside the destination.

**Parameter `destination`:** The destination file path beside the candidate.

**Parameter `overwrite`:** Whether an existing destination may be replaced; false never overwrites an external creator.

## Remarks

A failed create-only publication preserves the candidate. After successful publication the candidate is removed; a subsequent cleanup failure reports that the complete target exists. Unix create-only publication requires same-directory hard-link support. The caller must own the candidate and parent directory until the operation completes.

**Exception `T:System.IO.IOException`:** Publication fails, create-only mode finds an existing destination, or candidate retirement fails after the complete destination has been published.

**Exception `T:System.PlatformNotSupportedException`:** The host does not provide an atomic create-only filesystem primitive.
