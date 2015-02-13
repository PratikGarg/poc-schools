package com.schooling.publisher.service;

import static org.elasticsearch.node.NodeBuilder.nodeBuilder;

import java.util.Map;
import java.util.concurrent.ExecutionException;

import org.elasticsearch.action.get.GetResponse;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.node.Node;
import org.springframework.stereotype.Component;

import com.google.gson.Gson;

@Component
public class ElasticSearchServiceImpl {

	public GetResponse search(long documentId) throws InterruptedException, ExecutionException {
		Node node = nodeBuilder().clusterName("pratikgarg").node();
		Client client = node.client();
		 GetResponse response = client.prepareGet("schools", "school", "1")
		        .execute()
		        .actionGet();
		return response;
	}
	
	public IndexResponse index(Map<Object,Object> document, String documentId) throws InterruptedException, ExecutionException {
		Node node = nodeBuilder().clusterName("pratikgarg").node();
		Client client = node.client();
		IndexResponse response = client.prepareIndex("schools", "school")
                .setSource(new Gson().toJson(document))
                .setId(documentId)
                .execute()
                .actionGet();
		return response;
	}
}
