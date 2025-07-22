import { BURP_API_KNOWLEDGE, ApiClass, ApiMethod } from './realApiKnowledgeBase';

export function findApiClass(className: string): ApiClass | undefined {
    // Check interfaces first
    if (BURP_API_KNOWLEDGE.interfaces[className]) {
        return BURP_API_KNOWLEDGE.interfaces[className];
    }
    
    // Check classes
    if (BURP_API_KNOWLEDGE.classes[className]) {
        return BURP_API_KNOWLEDGE.classes[className];
    }
    
    // Check enums
    if (BURP_API_KNOWLEDGE.enums[className]) {
        return BURP_API_KNOWLEDGE.enums[className];
    }
    
    // Try partial match on fullName
    const allClasses = getAllApiClasses();
    return allClasses.find(cls => 
        cls.fullName === className || 
        cls.fullName.endsWith(`.${className}`) ||
        cls.name === className
    );
}

export function findApiMethod(methodName: string): ApiMethod | undefined {
    const allClasses = getAllApiClasses();
    
    for (const apiClass of allClasses) {
        const method = apiClass.methods.find(m => m.name === methodName);
        if (method) {
            return method;
        }
    }
    
    return undefined;
}

export function getAllApiClasses(): ApiClass[] {
    return [
        ...Object.values(BURP_API_KNOWLEDGE.interfaces),
        ...Object.values(BURP_API_KNOWLEDGE.classes),
        ...Object.values(BURP_API_KNOWLEDGE.enums)
    ];
}

export function searchApiMethods(query: string): ApiMethod[] {
    const results: ApiMethod[] = [];
    const allClasses = getAllApiClasses();
    
    for (const apiClass of allClasses) {
        for (const method of apiClass.methods) {
            if (method.name.toLowerCase().includes(query.toLowerCase()) ||
                method.description.toLowerCase().includes(query.toLowerCase())) {
                results.push(method);
            }
        }
    }
    
    return results;
}

export function getApiClassMethods(className: string): ApiMethod[] {
    const apiClass = findApiClass(className);
    return apiClass ? apiClass.methods : [];
}