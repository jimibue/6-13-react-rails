class Api::ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def destroy
    render json: Item.find(params[:id]).destroy
  end
end
